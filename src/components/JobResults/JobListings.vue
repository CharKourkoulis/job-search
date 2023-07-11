<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            class="test-sm mx-3 font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            >Previous
          </router-link>
          <router-link
            v-if="nextPage"
            role="link"
            class="test-sm mx-3 font-semibold text-brand-blue-1"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            >Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore } from '@/stores/jobs'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import usePreviousAndNextPage from '@/composables/usePreviousAndNextPage'

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)
const route = useRoute()
const currentPage = computed(() => Number.parseInt(route.query.page || '1'))
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value?.length / 10))

const { previousPage, nextPage } = usePreviousAndNextPage(currentPage, maxPage)

const displayedJobs = computed(() => {
  const firstJobIndex = (currentPage.value - 1) * 10
  const lastJobIndex = currentPage.value * 10
  return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex)
})
</script>
