package main

import (
	"github.com/gin-gonic/gin"
	"github.com/yongkheehou/cvwo-assignment-repo/backend/config"
	"github.com/yongkheehou/cvwo-assignment-repo/backend/initializers"
	"github.com/yongkheehou/cvwo-assignment-repo/backend/routes"
)

func init() {
	initializers.LoadEnvVariables()
}

func main() {
	r := gin.Default()
	config.Connect()
	routes.UserRoute(r)

	r.Run(":4000") // listen and serve on 0.0.0.0:4000
}
