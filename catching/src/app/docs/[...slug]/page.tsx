export default function feature({params}:{
    params:{
        slug:string[];
    };
}){
    if(params.slug.length === 2){
        return <h1>
            viewing docs from feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
    }else if(params.slug.length === 1){
            return <h1>viewing docs from feature {params.slug[0]}</h1>
    }else if(params.slug.length === 3){
        return <h1>viewing docs from feature {params.slug[0]} and concept {params.slug[1]} and topic {params.slug[2]}</h1>
    }

    return <h1>you are on the docs page</h1>
}