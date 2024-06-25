const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 用于解析JSON请求体
app.use(bodyParser.json());

// 静态文件服务
app.use(express.static('public'));

// 模拟数据库
let users = [];

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // 检查是否已有相同用户名或邮箱的用户
    const userExists = users.find(user => user.username === username || user.email === email);

    if (userExists) {
        res.json({ success: false, message: 'Username or email already exists' });
    } else {
        // 添加新用户到数据库
        users.push({ username, email, password });
        res.json({ success: true });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
