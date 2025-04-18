import { UUID } from 'node:crypto'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  type Project = {
    uuid: UUID
    description: string
    url: string
  }

  const projects = ref()

  function addProject(project: Project) {
    projects.value.push(project)
  }

  function removeProject(uuid: UUID) {}
})
