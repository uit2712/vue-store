![Vuex-state-management-library](https://github.com/uit2712/vue-store/blob/images/images/vuex.jpeg)
# Kiến thức cơ bản về Vuex
- Bước đầu để bắt tay vào làm việc với __Vuex__ trong __Vuejs__ thì bạn cần có kiến thức cơ bản về __Vuejs__ và __Vuex__.
- Đây là tài liệu cơ bản về Vuex: https://docs.google.com/document/d/1tzy94tX1YrzuxlJhX-I9npDQx2A5biH9cNfQbyttCto/edit?usp=sharing
- Hoặc bạn có thể tham khảo tài liệu trên trang chủ của vuex: https://vuex.vuejs.org/installation.html
# Cài đặt Nodejs
Phiên bản: 
# Cài đặt các thư viện cần thiết
## Cài đặt Vuex
__Vuex__ là 1 thư viện quản lý __state__ cho toàn bộ ứng dụng
```javascript
npm install --save vuex
```
## Cài đặt axios
__Axios__ là thư viện hỗ trợ tương tác với __RESTful API__ 1 cách dễ dàng
```javascript
npm install --save axios
```
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

