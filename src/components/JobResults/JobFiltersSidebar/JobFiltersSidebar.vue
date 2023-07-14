<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4">
    <section class="pb-5">
      <job-filters-sidebar-promt />
      <job-filter-sidebar-skills />

      <collapsible-accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>

      <collapsible-accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/user'
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import JobFiltersSidebarDegrees from './JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarPromt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPromt.vue'
import JobFilterSidebarSkills from '@/components/JobResults/JobFiltersSidebar/JobFilterSidebarSkills.vue'

const route = useRoute()
const userStore = useUserStore()
const parseSkillsSearchTerm = () => {
  const role = (route.query.role as string) || ''
  userStore.UPDATE_SKILLS_SEARCH_TERM(role)
}

onMounted(parseSkillsSearchTerm)
</script>
