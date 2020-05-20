![Vuex-state-management-library](https://github.com/uit2712/vue-store/blob/images/images/vuex.jpeg)
# Nội dung
- [Kiến thức cơ bản](#kiến-thức-cơ-bản)
- [Cài đặt Nodejs](#cài-đặt-nodejs)
- [Vue cli](#vue-cli)
- [Cài đặt các thư viện cần thiết](#cài-đặt-các-thư-viện-cần-thiết)
- [Cấu trúc thư mục và file](#cấu-trúc-thư-mục-và-file)
- [Validate trong Vuejs](#validate-trong-vuejs)
# Code editor
## Cài đặt Visual Studio Code
Tải về tại đây: https://code.visualstudio.com/download
## Cài đặt các extension hỗ trợ
- Vetur
- Vue 2 Snippets
- Vue VSCode Snippets
# Kiến thức cơ bản
Bước đầu để bắt tay vào làm việc với __Vuex__ trong __Vuejs__ thì bạn cần có kiến thức cơ bản về __Vuejs__ và __Vuex__.
- Tài liệu Vue: https://vuejs.org/v2/guide/
- Những thứ hay ho trong Vue: https://docs.google.com/document/d/1bs0U7eeE7dg365szwmw4Y1cXGVUq2SbDqmcVOykX2W0/edit?usp=sharing
- Tài liệu Vuex: https://docs.google.com/document/d/1tzy94tX1YrzuxlJhX-I9npDQx2A5biH9cNfQbyttCto/edit?usp=sharing \
Hoặc bạn có thể tham khảo tài liệu trên trang chủ của vuex: https://vuex.vuejs.org/installation.html
# Cài đặt Nodejs
Phiên bản: 
# Vue cli
__Vue cli__ là 1 trong các framework để lập trình Vuejs
## Cài đặt
```
npm install -g @vue/cli
```
## Tạo mới project
```
vue create project-name
```
với __project-name__ là tên của project bạn muốn đặt
## Chạy project
Trước tiên bạn cần phải mở command line trong thư mục project của bạn, sau đó chạy lệnh này
```
npm run serve
```
# Cài đặt các thư viện cần thiết
## Cài đặt Vuex
__Vuex__ là 1 thư viện quản lý __state__ cho toàn bộ ứng dụng
```javascript
npm install --save vuex
```
## Cài đặt axios
__Axios__ là thư viện hỗ trợ tương tác với __RESTful API__ 1 cách dễ dàng
### Cài đặt
```javascript
npm install --save axios
```
### Tài liệu tham khảo
https://github.com/axios/axios
# Cấu trúc thư mục và file
    src
    ├── ...
    ├── api                     # Thư mục chứa thông tin liên quan đến API                
    │   ├── index.js            # File cấu hình cho axios (baseUrl, headers,...) gọi tới API
    │   └── shop.js             # File cấu hình các phương thức lấy dữ liệu về từ API
    ├── store                   # Cấu hình cho Vuex trong thư mục này
    │   ├── modules             # Chứa tất cả các modules của store
    │   └── index.js            # Khai báo store để sử dụng
    ├── components              # Chứa tất cả các component của ứng dụng
    └── ...
# Validate trong Vuejs
Ở đây mình sẽ sử dụng thư viện Vee validate
## Cài đặt Vee validate
Dùng phiên bản 3.3.0
```
npm install --save vee-validate@3.3.0
```
## Hướng dẫn cơ bản
https://docs.google.com/document/d/1ed6Zs5_JaaDn1IolkqQ5yE__Y4qxddXGGi4l5Bq7J0Q/edit?usp=sharing
## Trang chủ Vee validate
https://logaretm.github.io/vee-validate/guide/basics.html#validation-provider
