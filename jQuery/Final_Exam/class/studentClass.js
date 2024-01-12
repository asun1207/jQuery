class student {
  constructor(stid, name, fgrade) {
    this.stid = stid;
    this.name = name;
    this.fgrade = fgrade;
  }
  toRow() {
    const tr = $("<tr></tr>");
    tr.addClass("table-primary");
    $.each(this, (key, value) => {
      if (key != "fgrade") {
        let td = $("<td></td>");
        td.text(value);
        tr.append(td);
      }
    });
    return tr;
  }
}
export default student;
