const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                data: '2006-9',
                price: 85.00,
                count: 1,
            },
            {
                id: 2,
                name: '《UNIX编程基础》',
                data: '2006-2',
                price: 59.00,
                count: 1,
            },
            {
                id: 3,
                name: '《编程珠玑》',
                data: '2006-10',
                price: 39.00,
                count: 1,
            },
            {
                id: 4,
                name: '《代码大全》',
                data: '2006-1',
                price: 52.00,
                count: 1,
            },
        ]
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            //  三种for循环的对比
            // 1.最常见，最基本的一种
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice

            // 2.for(let i in this.books)
            // let totalPrice = 0;
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }
            // return totalPrice
            // 这种方法仍要根据索引值进行遍历

            // 3.for(let i of this.books)   以后尝试着使用这种，直接就拿到数组的每一项了
            // let totalPrice = 0;
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice

            // 学了JS高阶函数的写法
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count
            }, 0)

        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})