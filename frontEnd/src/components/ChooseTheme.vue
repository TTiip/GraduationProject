<template>
  <div v-bind="attrs">
    <el-popover :width="180">
      <template #reference>
        <button @click='toggleDark()' class="text-18px dark:i-iconoir-half-moon i-iconoir:sun-light cursor-pointer" />
      </template>
      <template #default>
        <div class="flex gap-3">
          <div
            v-for="color of colorList"
            :key="color"
            :style="{ background: color, 'outline-color': color }"
            :class="['h-5', 'w-5', 'rounded', 'cursor-pointer', { 'outline outline-offset-1': elColorPrimary === color }]"
            @click="() => elColorPrimary = color"
          />
        </div>
      </template>
    </el-popover>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ChooseTheme'
  }
</script>

<script lang="ts" setup>
  import { useAttrs, watch } from 'vue'
  import { useCssVar, useLocalStorage } from '@vueuse/core'
  import { toggleDark } from '~/utils'

  const attrs = useAttrs()
  const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `${r}, ${g}, ${b}`
  }

  const colorPrimary = useCssVar('--el-color-primary')
  const colorPrimaryRgb = useCssVar('--el-color-primary-rgb')
  const elColorPrimary = useLocalStorage('--el-color-primary', colorPrimary.value.trim())

  watch(elColorPrimary, (val: string) => {
    colorPrimary.value = val
    colorPrimaryRgb.value = hex2rgb(val)
  })

  const colorList = [
    '#409EFF',
    '#6366F1',
    '#67C23A',
    '#E6A23C',
    '#909399'
  ]
</script>
