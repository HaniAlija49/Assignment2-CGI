AFRAME.registerComponent("always-on-top", {
  init: function () {
    this.el.addEventListener("object3dset", () => {
      if (this.el.getObject3D("mesh")) {
        this.el.getObject3D("mesh").renderOrder = 9999;
      }
    });
    if (this.el.getObject3D("mesh")) {
      this.el.getObject3D("mesh").renderOrder = 9999;
    }
  }
});

AFRAME.registerComponent("movement-constraint", {
  schema: {
    minX: { type: "number", default: -50 },
    maxX: { type: "number", default: 50 },
    minY: { type: "number", default: 0 },
    maxY: { type: "number", default: 20 },
    minZ: { type: "number", default: -50 },
    maxZ: { type: "number", default: 50 }
  },
  tick: function () {
    const pos = this.el.getAttribute("position");
    const x = Math.min(Math.max(pos.x, this.data.minX), this.data.maxX);
    const y = Math.min(Math.max(pos.y, this.data.minY), this.data.maxY);
    const z = Math.min(Math.max(pos.z, this.data.minZ), this.data.maxZ);
    this.el.setAttribute("position", { x, y, z });
  }
});

AFRAME.registerComponent("add-classroom-items", {
  init: function () {
    const container = this.el;
    const deskPositions = [
      { x: -20, y: 0, z: 15 },
      { x: 0, y: 0, z: 15 },
      { x: 20, y: 0, z: 15 },
      { x: -20, y: 0, z: 5 },
      { x: 0, y: 0, z: 5 },
      { x: 20, y: 0, z: 5 },
      { x: -20, y: 0, z: -5 },
      { x: 0, y: 0, z: -5 },
      { x: 20, y: 0, z: -5 },
      { x: -20, y: 0, z: -15 },
      { x: 0, y: 0, z: -15 },
      { x: 20, y: 0, z: -15 }
    ];
    deskPositions.forEach((pos) => {
      const desk = document.createElement("a-entity");
      desk.setAttribute("obj-model", "obj: #deskModel");
      desk.setAttribute("position", `${pos.x} ${pos.y} ${pos.z}`);
      desk.setAttribute("scale", "0.8 0.8 0.8");
      desk.setAttribute("material", "color: #8B4513; roughness: 1; metalness: 0");
      container.appendChild(desk);
    });
  }
});
