
export function createTask(task){
  post("http://127.0.0.1:8080/task/create", task);
}

export function updateTask(task){
  post(`http://127.0.0.1:8080/task/update/${task.id}`, task);
}

export function deleteTask(task){
  post(`http://127.0.0.1:8080/task/delete/${task.id}`, task);
}

export function get(url){
    let res_data = null;
    //"http://127.0.0.1:8080/get"
    return new Promise((resolve, reject)=>{
	fetch(url)
	    .then(res=>{
		if(!res.ok){
		    console.log("Response not ok");
		    return;
		}

		return res.json();
	    })
	    .then(data=>{
		res_data = data;
		console.log(data.content);
		return resolve(res_data);

	    })
	    .catch(error=>{
		console.log(error);
		reject(null);
	    });
    })
}

export function post(url, postData){
    // "http://127.0.0.1:8080/post"

    fetch(url, {
	method: "POST",
	header:{
	    "Content-Type":"apllication/json"
	},
	body:JSON.stringify(postData)
    })
	.then(res=>{
	    if(!res.ok){
		console.log("Response not ok");
		return;
	    }

	    return res.json();
	})
	.then(data=>{
	    console.log("POST successful");
	})
}
