const project = 'France';
const configVersion = '0.1';
export default config = {
    mainColor: '#42f4aa',
    secondColor: '#372c7f',
    logo: '/images/logo.jpg',
    splanScreenImage: '',
    userAggreementLink: 'https://termsfeed.com/terms-conditions/d202f4244d5d3e50e61ed0c2cf90bb24',
    Phoneformat: '+X-XXX-XXX-XXXX',
    stateOrProvince: 'State',
    currency: 'USD',
    currencySymbol: '$',
    homeComp: {
        name: 'HomePage',
        render: true,
        headerText: `Header For ${project}`
    },
    signUpComp: {
        name: `SignUp${project}`,
        render: false,
        headerText: `SignUp For ${project}`,
        features: [{
            name: 'firstName',
            display: true
        }]
    },
    loginComp: {
        name: `Login${project}`,
        render: true,
        headerText: `Login For ${project}`
    },
    compWithProps: {
        name: 'ComponentWithProps',
        render: true,
        image: ''
    },
    partiallyRenderedComponent: {
        button: {
            display: true,
            label: '2-Button to Display?'
        }
    }
}