<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'
import { useUserStore } from '@/stores/user'
import { useDegreeStore } from '@/stores/degrees'

const degreesStore = useDegreeStore()
const userStore = useUserStore()
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES)
</script>
