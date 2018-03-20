module.exports = (robot) => {

  robot.on('issues.opened', async context => {
    let issueComment = context.issue({body: 'Hello there :wave: , thank you for openning an issue. :+1:'})

    return context.github.issues.createComment(issueComment)
  })
}
