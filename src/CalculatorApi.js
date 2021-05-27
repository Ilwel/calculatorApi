class CalculatorApi{

    constructor(serviceAddress){

        this.serviceAddress = serviceAddress;

    }

    makeURL(num1, num2, operation){

        const resource = `${operation}/${num1}/${num2}`;
        return new URL(resource, this.serviceAddress);

    }

    calculate(num1, num2, operation, handler){

        fetch(this.makeURL(num1, num2, operation)).then(res => res.json).then(response => {

            handler(response["result"]);

        }, err => {

            handler(err);
            console.log(err);

        });

    }

}

export default CalculatorApi;