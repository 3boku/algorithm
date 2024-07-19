package main

import (
	"fmt"
	"strings"
	"time"
)

func main() {
	ads := strings.Split(time.Now().String(), " ")
	fmt.Println(ads[0])
}
