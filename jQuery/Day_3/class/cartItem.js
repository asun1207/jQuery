import Product from "./productClass";
class item extends Product {
  constructor(pid, pname, price, amount = 1) {
    super(pid, pname, price);
    this.amount = amount;
  }
  total(newAmount) {
    this.amount = newAmount;
    return this.price * this.amount;
  }
  toRow() {
    let tr = super.toRow();
    let input = $("<input type='number'/>");
    input.val(this.amount);
    let td = $("<td></td>");
    td.append(input);
    let totalTd = $("<td></td>");
    totalTd.text(this.total(1));
    tr.append(totalTd, td);
    return tr;
  }
}
export default item;
