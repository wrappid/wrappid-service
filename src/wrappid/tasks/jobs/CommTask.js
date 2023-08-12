module.exports = {
  prePerform: () => {
    console.log(`Communication Task is initated @ ${new Date()}`);
    /**
     * @todo
     * 1. get pending communication from db
     */
    return true;
  },
  perform: () => {
    console.log(
      `Communication task is running in every minute @ ${new Date()}`
    );
    /**
     * @todo
     * for each communication
     *    a. process communication through different communication engine
     *       based on comm type (SMS,EMAIL,WHATSAPP,// not needed PUSH NOTIFICATION as of now)
     *    b. update communication status in db
     */
  },
  postPerform: () => {
    console.log(`Communication Task is completed @ ${new Date()}`);
    console.log('<------------------------------------------>');
  },
  handleError: () => {},
};
