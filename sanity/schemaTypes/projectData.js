export const projectData = {
    name: "projects",
    title: "Project Data",
    type: "document",
    fields: [
      {
        title: "Project Title",
        name: "projectTitle",
        type: "string"
      },
      {
        title: "Project Images",
        name: "projectImages",
        type: "array",
        of: [
          {
            title: "Project Image",
            name: "projectImage",
            type: "image"
          }
        ]
      },
      {
        title: "Project Link",
        name: "projectLink",
        type: "string"
      },
      {
        title: "Project Description",
        name: "projectDescription",
        type: "text"
      },
      {
        title: "Project Technologies",
        name: "projectTechnologies",
        type: "string"
      },
      {
        title: "Project Developed By",
        name: "projectDevelopedBy",
        type: "string"
      }
    ]
  }