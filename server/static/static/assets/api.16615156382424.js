import{A as e}from"./Api.1661515638242.js";const c={accountProjects:e.create("/accounts/projects","get"),projects:e.create("/projects","get"),saveProject:e.create("/projects","post"),delProject:e.create("/projects","delete"),projectEnvs:e.create("/projects/{projectId}/envs","get"),saveProjectEnv:e.create("/projects/{projectId}/envs","post"),projectMems:e.create("/projects/{projectId}/members","get"),saveProjectMem:e.create("/projects/{projectId}/members","post"),deleteProjectMem:e.create("/projects/{projectId}/members/{accountId}","delete")};export{c as p};
