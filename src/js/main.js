import keys from '../data/layout.json';

class Project {

  constructor() {
    this.keys = keys;
    this.lang = 'eng';
    this.tmpStr = '';
    this.caps = false;
    this.shift = false;
    this.tmp = [];
    this.mouseID = 0;
  }

  static createHTML() {

    const container = document.createElement('div'),
           textarea = document.createElement('textarea');

    container.className = 'container';
    textarea.className = 'textarea';

    document.body.append(container);
    document.querySelector('.container').append(textarea);
    return true;
  }

  createKeyboard() {

    const keysContainer = document.createElement('div');

    keysContainer.className = 'keysContainer';
    document.querySelector('.container').append(keysContainer);

    this.keys[this.lang].forEach((item, index) => {

      const divKey = document.createElement('div'),
            regexp = /^[a-zа-я]$/i,
            span = document.createElement('span'),
            firstItem = item[1];

      divKey.setAttribute('data-key', item[0]);
      divKey.classList.add('buttonClass');

      if (this.caps && regexp.test(item[1])) {
        divKey.classList.add('caps');
      }

      divKey.classList.add(`key-${index}`);
      document.querySelector('.keysContainer').append(divKey);
      span.innerHTML = firstItem;
      span.classList.add('main');
      document.querySelector(`.key-${index}`).append(span);

      if (item[2]) {

        const spanSec = document.createElement('span');

        spanSec.innerHTML = item[2];
        spanSec.classList.add('edition');
        document.querySelector(`.key-${index}`).append(spanSec);
      }
    });
  }

  updateCaps() {

    this.keys[this.lang].forEach((item) => {

      const regexp = /^[a-z\][а-я']$/i;

      if (regexp.test(item[1])) {
        document.querySelector(`.buttonClass[data-key=${item[0]}]`).classList.toggle('caps');
      }
    });
    this.caps = !this.caps;
  }

  Lang() {

    this.lang = this.lang === 'rus' ? 'eng' : 'rus';
    this.Storage(this.lang);
    this.keys[this.lang].forEach((item) => {

      const elem = document.querySelector(`.buttonClass[data-key=${item[0]}]`);

      elem.querySelector('.main').innerHTML = item[1];
      if (item[2]) {
        if (elem.querySelector('.edition') == null) {
          const spanEd = document.createElement('span');
          spanEd.classList.add('edition');
          elem.append(spanEd);
        }
        elem.querySelector('.edition').innerHTML = item[2];

      } else if (elem.querySelector('.edition') != null) {
        elem.querySelector('.edition')
          .remove();
      }
    });
  }

  Events() {

    document.querySelector('.keysContainer').addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('buttonClass')) {
        this.keysFilter(event.target, false);
      } else if (event.target.classList.contains('main') || event.target.classList.contains('edition')) {
        this.keysFilter(event.target.parentElement, false);
      }
    });

    document.querySelector('.keysContainer').addEventListener('mouseup', (event) => {
      if (event.target.classList.contains('buttonClass')) {
        this.keysFilter(event.target, true);
      } else if (event.target.classList.contains('main') || event.target.classList.contains('edition')) {
        this.keysFilter(event.target.parentElement, true);
      }
      document.querySelector('.textarea').focus();
    });

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      if (event.repeat !== true || (event.repeat === true && event.shiftKey === true && event.key !== 'Shift')) {
        if (this.keys[this.lang].map((item) => item[0]).indexOf(event.code) !== -1) {
          document.querySelector(`.buttonClass[data-key=${event.code}]`).classList.add('act');
          this.keysFilter(document.querySelector(`.buttonClass[data-key=${event.code}]`), false);
        }
      } else {
        this.shift = true;
      }
      document.querySelector('.textarea').focus();
    });

    document.addEventListener('keyup', (event) => {

      event.preventDefault();
      if (this.keys[this.lang].map((item) => item[0]).indexOf(event.code) !== -1) {
        document.querySelector(`.buttonClass[data-key=${event.code}]`).classList.remove('act');
        this.keysFilter(document.querySelector(`.buttonClass[data-key=${event.code}]`), true);
      }
    });
  }

  keysFilter(value, up) {

    const pattern = ['Backspace', 'ArrowLeft', 'ArrowRight',
                      'ArrowDown', 'ArrowUp', 'Delete',
                      'Tab', 'CapsLock', 'Enter',
                      'ShiftLeft', 'ShiftRight', 'ControlLeft',
                      'AltLeft', 'ControlRight', 'AltRight'];

    if (pattern.indexOf(value.getAttribute('data-key')) === -1 && !up) {
      this.CapsLock(value, true);
    } else if (up) {
      this.KeysUpper(value);
    } else {
      this.CapsLock(value, false);
    }
  }

  CapsLock(value, print) {

    if (!this.caps && print) {
      this.printValue(value.querySelector('.main').innerHTML);
    } else if (this.caps && print) {
      if (value.querySelector('.edition')) {
        this.printValue(value.querySelector('.edition').innerHTML);
      } else {
        this.printValue(value.querySelector('.main').innerHTML.toUpperCase());
      }
    } else {
      this.KeyPress(value);
    }
  }

  KeyPress(value) {

    if (this.tmp.indexOf(value.querySelector('.main').innerHTML) === -1) {
      this.tmp.push(value.querySelector('.main').innerHTML);
    }

    switch (value.querySelector('.main').innerHTML) {

      case 'Backspace':
        this.mouseID = document.querySelector('.textarea').selectionStart;
        if (this.mouseID > 0) {

          const memory = document.querySelector('.textarea').innerHTML;

          this.tmpStr = memory.slice(0, this.mouseID - 1) + memory.slice(this.mouseID);
          document.querySelector('.textarea').innerHTML = this.tmpStr;
          document.querySelector('.textarea').selectionStart = this.mouseID - 1;
          document.querySelector('.textarea').selectionEnd = this.mouseID - 1;
        }
        break;

      case 'CapsLock':
        this.updateCaps();
        break;

      case 'Shift':
        this.updateCaps();
        break;

      case 'Del':
        this.mouseID = document.querySelector('.textarea').selectionStart;
        if (this.mouseID < document.querySelector('.textarea').innerHTML.length) {

          const memory = document.querySelector('.textarea').innerHTML;

          this.tmpStr = memory.slice(0, this.mouseID) + memory.slice(this.mouseID + 1);
          document.querySelector('.textarea').innerHTML = this.tmpStr;
          document.querySelector('.textarea').selectionStart = this.mouseID;
          document.querySelector('.textarea').selectionEnd = this.mouseID;
        }
        break;

      case 'ENTER':
        this.printValue('\n');
        break;

      case 'Tab':
        (() => {

          const memory = document.querySelector('.textarea').innerHTML;

          this.mouseID = document.querySelector('.textarea').selectionStart;
          this.tmpStr = `${memory.slice(0, this.mouseID)}  ${memory.slice(this.mouseID)}`;
          document.querySelector('.textarea').innerHTML = this.tmpStr;
          document.querySelector('.textarea').selectionStart = this.mouseID + 2;
          document.querySelector('.textarea').selectionEnd = this.mouseID + 2;
        })();
        break;

      case '\u25C4':
        this.mouseID = document.querySelector('.textarea').selectionStart;

        if (this.mouseID > 0) {
          document.querySelector('.textarea').selectionStart = this.mouseID - 1;
          document.querySelector('.textarea').selectionEnd = this.mouseID - 1;
        }
        break;

      case '\u25BA':
        this.mouseID = document.querySelector('.textarea').selectionStart;
        if (this.mouseID < document.querySelector('.textarea').innerHTML.length) {
          document.querySelector('.textarea').selectionStart = this.mouseID + 1;
          document.querySelector('.textarea').selectionEnd = this.mouseID + 1;
        }
        break;

      case '\u25BC':
        (() => {
          this.mouseID = document.querySelector('.textarea').selectionStart;

          const result = document.querySelector('.textarea').innerHTML.indexOf('\n', this.mouseID + 1);

          if (result !== -1) {
            document.querySelector('.textarea').selectionStart = result;
            document.querySelector('.textarea').selectionEnd = result;
          } else {
            document.querySelector('.textarea').selectionStart = document.querySelector('.textarea').innerHTML.length;
            document.querySelector('.textarea').selectionEnd = document.querySelector('.textarea').innerHTML.length;
          }
        })();
        break;

      case '\u25B2':
        (() => {
          this.mouseID = document.querySelector('.textarea').selectionStart;
          const result = document.querySelector('.textarea').innerHTML.lastIndexOf('\n', this.mouseID - 1);
          if (result !== -1) {
            document.querySelector('.textarea').selectionStart = result;
            document.querySelector('.textarea').selectionEnd = result;
          }
        })();
        break;

      default:
        break;
    }
  }

  KeysUpper(value) {

    if (this.tmp.indexOf('Alt') !== -1 && this.tmp.indexOf('Shift') !== -1) {
      this.Lang();
    }

    switch (value.querySelector('.main').innerHTML) {

      case 'Shift':
        this.updateCaps();
        break;
      default:
        break;
    }

    if (this.tmp.indexOf(value.querySelector('.main').innerHTML) !== -1) {
      this.tmp.splice(this.tmp.indexOf(value.querySelector('.main').innerHTML), 1);
    }
  }

  Storage(value) {

    if (value) {
      localStorage.removeItem('lang');
      localStorage.setItem('lang', `${value}`);
    } else if (!localStorage.getItem('lang')) {
      localStorage.removeItem('lang');
      localStorage.setItem('lang', `${this.lang}`);
    } else {
      this.lang = localStorage.getItem('lang');
    }
  }

  printValue(value) {

    this.mouseID = document.querySelector('.textarea').selectionStart;

    const memory = document.querySelector('.textarea').innerHTML;

    this.tmpStr = memory.slice(0, this.mouseID) + value + memory.slice(this.mouseID);
    document.querySelector('.textarea').innerHTML = this.tmpStr;
    document.querySelector('.textarea').selectionStart = this.mouseID + 1;
    document.querySelector('.textarea').selectionEnd = this.mouseID + 1;
  }
}

const keyboard = new Project();

const LoadMethods = new Promise((resolve, reject) => {
  if (Project.createHTML()) { resolve(); } else { reject(); }
});
LoadMethods.then(() => { keyboard.Storage(); })
  .then(() => { keyboard.createKeyboard(); })
  .then(() => { keyboard.Events(); });
