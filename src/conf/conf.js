console.log("ENV:", import.meta.env);

const conf = {
    serviceid: import.meta.env.VITE_SERVICEID,
    templateid: import.meta.env.VITE_TEMPLATEID,
    publickey: import.meta.env.VITE_PUBLICKEY,
}

export default conf;