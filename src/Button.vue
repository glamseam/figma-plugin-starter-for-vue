<template>
    <button
        type="button"
        @click="handleClick"
    >
        {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    label?: string
}>(), {
    label: 'Default label'
})

const emit = defineEmits<{
    (e: 'on-click', event: string): void
}>()

const handleClick = () => emit('on-click', 'event')
</script>
