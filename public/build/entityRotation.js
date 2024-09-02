class EntityRotation extends pc.ScriptType {
  static addAttributes() {
    this.attributes.add("serverCalculated", {
      type: "boolean",
      default: false,
    });
  }

  initialize() {
    if (!this.serverCalculated) {
      this.tumble = Math.random() * 400.0 - 200.0;
    }
  }

  setTumble(tumble) {
    this.tumble = tumble;
  }

  update(dt) {
    if (!this.serverCalculated) {
      this.entity.rotateLocal(0, 0, this.tumble * dt);
    } else {
      this.entity.setEulerAngles(0, 0, this.tumble);
    }
  }
}

pc.registerScript(EntityRotation, "entityRotation");

EntityRotation.addAttributes();
