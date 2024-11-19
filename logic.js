new Vue({
    el : "#home",
    data:{
        user:"",
        password:"",
        loginType:true,
        login:false,
        Type:false,
    },
    methods: {  
        handleClick() {  
            if (!this.user || !this.password) {  
                alert("用户名和密码不能为空！");  
                return;  
            }  
      
            fetch('/submit', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify({  
                    username: this.user,  
                    password: this.password,  
                }),  
            })  
            .then(response => {  
                if (!response.ok) {  
                    throw new Error('登录失败，请重试！');  
                }  
                return response.json();  
            })  
            .then(data => {  
                console.log(data); // 处理登录成功后的数据  
                // 更新登录状态或进行其他操作  
            })  
            .catch(error => {  
                console.error('登录请求失败：', error);  
                alert('登录请求失败，请检查网络连接或稍后重试！');  
            });  
        },  
    },  
        });
function openTab(evt, tabName) {  
    // 获取所有元素，并移除激活类  
    var i, tabcontent, tablinks;  
    tabcontent = document.getElementsByClassName("tab-content");  
    for (i = 0; i < tabcontent.length; i++) {  
      tabcontent[i].style.display = "none";  
    }  
    tablinks = document.getElementsByClassName("tab-link");  
    for (i = 0; i < tablinks.length; i++) {  
      tablinks[i].className = tablinks[i].className.replace(" active", "");  
    }  
    // 显示当前标签页的内容，并添加激活类  
    document.getElementById(tabName).style.display = "block";  
    evt.currentTarget.className += " active";  
  }  
    
  // 可以在页面加载时默认显示第一个标签页  
  document.getElementsByClassName("tab-link")[0].click();
  