<template>
    <div class="todo-list">
        <todo-create/>
        <todo-item
            v-for="todo in todoList"
            :key="todo.id"
            :todo="todo"
        />
        <b-dropdown id="dropdown-1" :text="moreInfoText" class="m-md-2">
            <b-dropdown-item
                v-for="todo in todoList"
                :key="todo.id"
                @click="() => seeMore(todo)"
            >{{ todo.text }}</b-dropdown-item>
        </b-dropdown>
        <div class="more-info" v-if="moreInfoTodo !== null">
            <span>{{ moreInfoTodo.id }} : {{ moreInfoTodo.text }}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import TodoItem from './TodoItem.vue';
import TodoCreate from './TodoCreate.vue';

export default {
    components: {
        TodoItem,
        TodoCreate,
    },
    computed: {
        ...mapState({
            todoList: state => state.todo.todoList,
        }),
        ...mapGetters('todo', [
            'getTodo'
        ]),
    },
    data() {
        return {
            moreInfoText: 'Chọn',
            moreInfoTodo: null,
        }
    },
    methods: {
        seeMore(todo) {
            this.moreInfoText = todo.text;
            this.moreInfoTodo = this.getTodo(todo.id);
        },
    },
}
</script>

<style scoped>
.todo-list {
    margin: 30px;
}
</style>