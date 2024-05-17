const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://nangerno.github.io/portfolio',
    title: 'Welcome',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'nangerno',
    role: 'Blockchain Developer',
    description:
      '😊😊Blockchain developer😊😊 with 3+ years of experience building decentralized applications on Ethereum and Hyperledger. Proficient in Solidity, JavaScript, and Go. Contributed to open-source projects and successfully launched a DeFi protocol with $10M+ in total value locked.',
    resume: 'https://example.com',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Project 1',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 2',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
    {
      name: 'Project 3',
      description:
        'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com',
      livePreview: 'https://github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux',
    'SASS',
    'Material UI',
    'Git',
    'CI/CD',
    'Jest',
    'Enzyme',
  
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'nangerno@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  