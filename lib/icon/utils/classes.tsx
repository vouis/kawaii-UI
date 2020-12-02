const classes = (...names: (string | undefined)[])=>{
    return names.filter(Boolean).join(' '); // 值穿透
}

export default classes;