# 选择Node作为基础镜像
FROM node:16.13.1 

# 创建工作目录
WORKDIR /app

# 复制package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN yarn

# 复制当前目录下的所有文件到工作目录
COPY . .

# 构建项目
RUN yarn build

# 使用Nginx镜像作为基础镜像
FROM nginx:1.21.3-alpine

# 将构建好的项目复制到Nginx的html目录下
COPY --from=0 /app/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]

