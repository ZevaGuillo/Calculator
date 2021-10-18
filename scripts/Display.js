class Display{
    constructor(displayValuePrevious, displayValueCurrent){
        this.displayValuePrevious = displayValuePrevious;
        this.displayValueCurrent = displayValueCurrent;
        this.calculator = new Calculator();
        this.valueCurrent = '';
        this.valuePrevious = '';
        this.typeOperator = undefined;
        this.type = {
            add: '+',
            sub: '-',
            divide: '%',
            multiply: '*'
        }
    }

    delete(){
        this.valueCurrent = this.valueCurrent.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.valueCurrent = '';
        this.valuePrevious = '';
        this.typeOperator = undefined;
        this.printValues();
    }

    addNumber(num){
        if(num === '.' && this.valueCurrent.includes('.')) return;
        this.valueCurrent += num.toString();
        this.printValues();
    }

    printValues(){
        this.displayValueCurrent.textContent = this.valueCurrent;
        this.displayValuePrevious.textContent = `${this.valuePrevious}${this.type[this.typeOperator]||''}`;
    }

    computar(type){
        this.typeOperator !== 'equals' && this.calculate();
        this.typeOperator = type;
        this.valuePrevious = this.valueCurrent || this.valuePrevious;
        this.valueCurrent = '';
        this.printValues();
    }

    calculate(){
        const valuePrevious = parseFloat(this.valuePrevious);
        const valueCurrent = parseFloat(this.valueCurrent);
        if(isNaN(valuePrevious) || isNaN(valueCurrent)) return;
        this.valueCurrent = this.calculator[this.typeOperator](valuePrevious, valueCurrent);
    }
}