$(document).on("keyup", this.keyPressDispatcher.bind(this));

  keyPressDispatcher(e) {
    console.log(e.keyCode);
  }