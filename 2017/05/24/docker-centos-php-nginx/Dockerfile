# centos
# version 1
# author henery

FROM centos:7.2.1511

RUN yum install -y epel-release passwd wget curl tar gcc gcc-c++ make 

# php安装
## 下载php源码，源代码放在/usr/local/src
RUN cd /usr/local/src
RUN wget http://cn2.php.net/distributions/php-7.0.19.tar.gz
RUN tar xf php-7.0.19.tar.gz
RUN rm -f php-7.0.19.tar.gz
## 安装php的依赖包
RUN yum install -y openssl-devel zlib-devel pcre-devel libxml2-devel libcurl-devel libpng-devel mcrypt libmcrypt-devel mhash mhash-devel
## 配置编译安装php
RUN cd /usr/local/src/php-7.0.19
RUN ./configure --prefix=/usr/local/php --enable-fpm --with-mysqli --with-openssl --with-pdo-mysql --enable-mbstring --with-curl --with-gd
RUN make && make install
## php配置文件初始化
RUN cp /usr/local/src/php-7.0.19/php.ini-production /usr/local/php/lib/php.ini
RUN cp /usr/local/php/etc/php-fpm.conf.default /usr/local/php/etc/php-fpm.conf
RUN cp /usr/local/php/etc/php-fpm.d/www.conf.default /usr/local/php/etc/php-fpm.d/www.conf
## 创建fpm运行用户
RUN useradd -r -s /sbin/nologin php
##
RUN mkdir -p /usr/local/php/log
## 
RUN yum install -y autoconf
RUN cd /usr/local/php/bin
RUN ./pecl install redis


# nginx
## 下载nginx源码
RUN cd /usr/local/src
RUN wget http://nginx.org/download/nginx-1.10.2.tar.gz
RUN tar xf nginx-1.10.2.tar.gz
RUN rm -f nginx-1.10.2.tar.gz
RUN useradd -r -s /sbin/nologin nginx

RUN cd /usr/local/src/nginx-1.10.2
RUN ./configure --prefix=/usr/local/nginx --user=nginx --group=nginx --with-pcre --with-http_ssl_module --with-http_gzip_static_module
RUN make && make install






