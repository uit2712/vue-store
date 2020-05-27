<template>
    <div class="todo-create row">
        <b-form-input
            v-model="model.text"
            placeholder="Enter your todo"
            ref="todoInput"
        ></b-form-input>
        <b-button
            variant="primary"
            :disabled="!model.text || model.text.trim() === ''"
            @click="addNewTodo"
        >Add</b-button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            model: {
                id: '',
                text: '',
            }
        }
    },
    methods: {
        ...mapMutations('todo', [
            'add'
        ]),
        makeId(length) {
            let result = '';
            let characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        },
        addNewTodo() {
            this.model.id = this.makeId(5);
            this.add({
                todo: this.model,
            });

            this.model = {
                id: '',
                text: ''
            };

            this.$refs.todoInput.focus();
        }
    }
}
</script>

<style scoped>
input {
    width: unset;
    margin-right: 10px;
}

.row {
    margin-left: 0px!important;
}
</style>