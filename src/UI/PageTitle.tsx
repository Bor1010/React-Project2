type Props = {
    value: string
}


function PageTitle(props: Props) {
    const value = props.value;

    return (<h1 style={{color:'blue'}}>{value}</h1>);
}

export default PageTitle;