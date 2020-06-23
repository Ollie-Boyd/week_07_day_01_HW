import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () =>
    new Vue({
        el: '#app',
        data:{
            items: ['wash car', 'do pda', 'go shopping'],
            newItem: ""
        },
        methods: {
            addItem: function() {
                this.items.push(this.newItem);
                this.newItem = "";
            }
        }
    })
)
