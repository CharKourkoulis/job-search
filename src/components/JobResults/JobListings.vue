<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing
  },
  data() {
    return {
      jobsUrl: 'ttp://localhost:3000/jobs',
      jobs: []
    }
  },
  async mounted() {
    this.getJobs()
  },
  methods: {
    async getJobs() {
      const response = await axios.get(this.jobsUrl)
      this.jobs = response.data
    }
  }
}
</script>
