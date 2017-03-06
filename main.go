package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
	"time"
)

var (
	path    = "./assets/admin"
	icoPath = "./assets/commons/favicon.ico"
)

func main() {
	log.Println("my golang static web app start...")

	http.HandleFunc("/", CommHandler)
	err := http.ListenAndServe(":80", nil)
	if err != nil {
		log.Fatalln("创建监听失败,", err)
	}
}

func CommHandler(w http.ResponseWriter, r *http.Request) {
	url := r.URL.Path // 请求URL
	fmt.Println(url, " ", time.Now().Format("2006-01-0215:04:05.99999"))

	if url == "/user" {
		str := `[{"username":"huanggh","age":15},{"username":"sb","age":25}]`
		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(str))
		return
	}

	// 匹配/
	if url == "" || url == "/" {
		b, err := ioutil.ReadFile(path + "/index.html")
		if err != nil {
			log.Println("读取index.html失败", err)
		}
		w.Header().Set("Content-Type", "text/html;charset=utf-8")
		w.Write(b)
		return
	}

	// 匹配favicon.ico
	if url == "/favicon.ico" {
		b, err := ioutil.ReadFile(icoPath)
		if err != nil {
			log.Println("读取favicon.ico失败", err)
		}
		w.Header().Set("Content-Type", "image/x-icon")
		w.Write(b)
		return
	}

	// 其他
	if strings.HasSuffix(url, ".html") {
		w.Header().Set("Content-Type", "text/html;charset=utf-8")
	} else if strings.HasSuffix(url, ".js") {
		w.Header().Set("Content-Type", "text/javascript")
	} else if strings.HasSuffix(url, ".css") {
		w.Header().Set("Content-Type", "text/css")
	} else if strings.HasSuffix(url, ".jpg") {
		w.Header().Set("Content-Type", "application/x-jpg")
	} else if strings.HasSuffix(url, ".png") {
		w.Header().Set("Content-Type", "image/png")
	} else if strings.HasSuffix(url, ".gif") {
		w.Header().Set("Content-Type", "image/gif")
	} else if strings.HasSuffix(url, ".ico") {
		w.Header().Set("Content-Type", "image/x-icon")
	} else if strings.HasSuffix(url, ".woff2") {
		w.Header().Set("Content-Type", "application/font-woff2")
	} else {
		w.Write([]byte("未识别的请求:" + url))
		return
	}

	b, err := ioutil.ReadFile(path + url)
	if err != nil {
		log.Println("读取文件[", url, "]失败,", err)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write(b)
}
