let project = 'Canada'
export default config = {
    mainColor: '',
    secondColor: '',
    logo: '',
    splanScreenImage: '',
    userAggreementLink: '',
    Phoneformat: '',
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
        headerText: `SignUp For ${project}`
    },
    testComp: {
        name: 'TestComponent',
        render: false,
        image: ''
    },
    commonComp: {
        name: 'CommonComponent',
        render: true,
        button: {
            display: false,
            label: 'Hello Button'
        }
    }
}