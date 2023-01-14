package router

import (
	"mayfly-go/internal/db/api"
	"mayfly-go/internal/db/application"
	sysapp "mayfly-go/internal/sys/application"
	tagapp "mayfly-go/internal/tag/application"
	"mayfly-go/pkg/req"

	"github.com/gin-gonic/gin"
)

func InitDbRouter(router *gin.RouterGroup) {
	db := router.Group("dbs")
	{
		d := &api.Db{
			DbApp:        application.GetDbApp(),
			DbSqlExecApp: application.GetDbSqlExecApp(),
			MsgApp:       sysapp.GetMsgApp(),
			TagApp:       tagapp.GetTagTreeApp(),
		}
		// 获取所有数据库列表
		db.GET("", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.Dbs)
		})

		saveDb := req.NewLogInfo("db-保存数据库信息").WithSave(true)
		db.POST("", func(c *gin.Context) {
			req.NewCtxWithGin(c).
				WithLog(saveDb).
				Handle(d.Save)
		})

		// 获取数据库实例的所有数据库名
		db.POST("databases", func(c *gin.Context) {
			req.NewCtxWithGin(c).
				Handle(d.GetDatabaseNames)
		})

		db.GET(":dbId/pwd", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.GetDbPwd)
		})

		deleteDb := req.NewLogInfo("db-删除数据库信息").WithSave(true)
		db.DELETE(":dbId", func(c *gin.Context) {
			req.NewCtxWithGin(c).
				WithLog(deleteDb).
				Handle(d.DeleteDb)
		})

		db.GET(":dbId/t-infos", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.TableInfos)
		})

		db.GET(":dbId/t-index", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.TableIndex)
		})

		db.GET(":dbId/t-create-ddl", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.GetCreateTableDdl)
		})

		execSqlLog := req.NewLogInfo("db-执行Sql")
		db.POST(":dbId/exec-sql", func(g *gin.Context) {
			rc := req.NewCtxWithGin(g).WithLog(execSqlLog)
			rc.Handle(d.ExecSql)
		})

		execSqlFileLog := req.NewLogInfo("db-执行Sql文件").WithSave(true)
		db.POST(":dbId/exec-sql-file", func(g *gin.Context) {
			req.NewCtxWithGin(g).
				WithLog(execSqlFileLog).
				Handle(d.ExecSqlFile)
		})

		dumpLog := req.NewLogInfo("db-导出sql文件").WithSave(true)
		db.GET(":dbId/dump", func(g *gin.Context) {
			req.NewCtxWithGin(g).
				WithLog(dumpLog).
				Handle(d.DumpSql)
		})

		db.GET(":dbId/t-metadata", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.TableMA)
		})

		db.GET(":dbId/c-metadata", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.ColumnMA)
		})

		db.GET(":dbId/hint-tables", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.HintTables)
		})

		/**  db sql相关接口  */

		db.POST(":dbId/sql", func(c *gin.Context) {
			rc := req.NewCtxWithGin(c)
			rc.Handle(d.SaveSql)
		})

		db.GET(":dbId/sql", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.GetSql)
		})

		db.DELETE(":dbId/sql", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.DeleteSql)
		})

		db.GET(":dbId/sql-names", func(c *gin.Context) {
			req.NewCtxWithGin(c).Handle(d.GetSqlNames)
		})
	}
}
