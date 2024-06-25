const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 用于解析JSON请求体
app.use(bodyParser.json());

// 静态文件服务
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // 这里应该有用户验证逻辑，比如查询数据库
    if (username === 'admin' && password === 'password') {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});