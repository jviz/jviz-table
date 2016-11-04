//Get o save the number of entries
jviz.modules.table.prototype.entries = function(n)
{
  //Check for undefined
  if(typeof n === 'undefined'){ return this._entries.actual; }

  //Parse the number
  n = parseInt(n);

  //Check the number value
  if(n <= 0){ return jviz.console.error('Page entries must be a positive number', this); }

  //Save the number
  this._entries.actual = n;

  //Calculate the number of pages
  this._page.end = this._data.length / this._entries.actual;

  //Parse the number of pages
  this._page.end = (Math.floor(this._page.end) === this._page.end) ? this._page.end : Math.floor(this._page.end) + 1;

  //Open the first page
  this.page(1);

  //Update the number of pages
  jviz.dom.html(this._page.counter.label2.id, this._page.counter.label2.text.replace('{pages}', this._page.end));

  //Update the min attribute
  jviz.dom.attr(this._page.counter.input.id, 'min', this._page.start);

  //Update the max attribute
  jviz.dom.attr(this._page.counter.input.id, 'max', this._page.end);

  //Update the step
  jviz.dom.attr(this._page.counter.input.id, 'step', this._page.step);

  //Continue
  return this;
};