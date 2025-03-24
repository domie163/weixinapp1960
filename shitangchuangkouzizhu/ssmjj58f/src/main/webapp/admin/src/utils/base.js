const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmjj58f/",
            name: "ssmjj58f",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmjj58f/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的食堂窗口自助点餐系统"
        } 
    }
}
export default base
