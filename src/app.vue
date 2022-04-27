<template>
    <Button
        label="label"
        @on-click="(v) => handleClick(v)"
    />
</template>

<script lang="ts" setup>
import Button from '@/Button.vue'

const handleClick = (str: string) => {
    console.log(str)
    console.log('click!!')
}
</script>
