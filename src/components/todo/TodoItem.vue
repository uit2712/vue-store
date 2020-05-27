<template>
    <div class="todo-item row">
        <div class="todo-content row">
            <span>Task {{ todo.id }}:</span>
            <b-form-input
                v-model="todo.text"
                placeholder="Enter your todo"
                :disabled="!isUpdating"
            ></b-form-input>
        </div>
        <div class="actions">
            <b-button :id="'deleteTodo' + todo.id" variant="danger" @click="showDeleteTodoModal">Delete</b-button>
            <b-button variant="warning" @click="startUpdating">{{ isUpdating ? 'Confirm': 'Update' }}</b-button>
        </div>
        <b-modal :id="'modal-delete-todo' + todo.id" v-model="isShowModalDelete">
            <template v-slot:modal-title>
                Do you want do delete todo id: {{ todo.id }}?
            </template>
            <template v-slot:modal-footer>
                <b-button @click="cancelDeleting">Cancel</b-button>
                <b-button variant="danger" @click="confirmDeleting">Delete</b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import * as types from '../../store/mutation-types';

export default {
    data() {
        return {
            isShowModalDelete: false,
            isUpdating: false,
        }
    },
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
    methods: {
        ...mapMutations('todo', [
            types.DELETE,
            types.UPDATE,
        ]),
        showDeleteTodoModal() {
            this.showModal({
                modalId: 'modal-delete-todo' + this.todo.id,
                buttonRef: 'deleteTodo' + this.todo.id,
            });

            this.isShowModalDelete = true;
        },
        hideModal({
            modalId,
            buttonRef,
        }) {
            this.$root.$emit('bv::hide::modal', modalId, `#${buttonRef}`);
        },
        showModal({
            modalId,
            buttonRef,
        }) {
            this.$root.$emit('bv::show::modal', modalId, `#${buttonRef}`);
        },
        cancelDeleting() {
            this.hideModal({
                modalId: 'modal-delete-todo' + this.todo.id,
                buttonRef: 'deleteTodo' + this.todo.id
            });
            this.isShowModalDelete = false;
        },
        confirmDeleting() {
            this[types.DELETE]({ todo: this.todo });
        },
        startUpdating() {
            if (this.isUpdating === false) {
                this.isUpdating = true;
            } else {
                this[types.UPDATE]({ todo: this.todo });
                this.isUpdating = false;
            }
        }
    },
}
</script>

<style scoped>
.row {
    margin-left: 0px!important;
}

.todo-item {
    margin-bottom: 10px;
}

.todo-content {
    margin-right: 10px;
}
</style>