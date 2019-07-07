function FormAnser(email, name, type, job, from, backgound, other) {
  this.email = email;
  this.name = name;
  this.type = type;
  this.job = job;
  this.from = from;
  this.backgound = backgound;
  this.other = other;
}

function hallelujahChange(value, listLocate, questionLocate) {
  if (value === '') {
    if (listLocate.contains('goes__fine')) {
      listLocate.remove('goes__fine');
    }
    if (!(questionLocate.contains('warning__bg'))) {
      questionLocate.add('warning__bg');
    }
  } else {
    if (!(listLocate.contains('goes__fine'))) {
      listLocate.add('goes__fine');
    }
    if (questionLocate.contains('warning__bg')) {
      questionLocate.remove('warning__bg');
    }
  }
}

document.querySelector('.enroll_form').addEventListener('submit', (e) => {
  const email = document.querySelector('input[name=user_email]').value;
  const name = document.querySelector('input[name=user_name]').value;
  const job = document.querySelector('input[name=user_job]').value;
  const from = document.querySelector('input[name=user_from]').value;
  const backgound = document.querySelector('input[name=user_background]').value;
  const other = document.querySelector('input[name=other]').value;
  /* 需要的位址 */
  const emailList = document.querySelector('.email__warning').classList;
  const questionEmail = document.querySelector('.question__email').classList;
  const nameList = document.querySelector('.name__warning').classList;
  const questionName = document.querySelector('.question__name').classList;
  const jobList = document.querySelector('.job__warning').classList;
  const questionJob = document.querySelector('.question__job').classList;
  const fromList = document.querySelector('.from__warning').classList;
  const questionFrom = document.querySelector('.question__from').classList;
  const backgroundList = document.querySelector('.background__warning').classList;
  const questionBackground = document.querySelector('.question__background').classList;
  const typeList = document.querySelector('.type__warning').classList;
  const questionType = document.querySelector('.question__type').classList;

  /* 找出type */
  const radios1 = document.querySelector('#radios1');
  const radios2 = document.querySelector('#radios2');
  let type = '';
  if (radios1.checked) {
    type = 'novice';
  } else if (radios2.checked) {
    type = 'engineer';
  } else {
    type = '';
  }
  const user = new FormAnser(email, name, type, job, from, backgound, other);
  console.log(user);

  hallelujahChange(email, emailList, questionEmail);
  hallelujahChange(name, nameList, questionName);
  hallelujahChange(job, jobList, questionJob);
  hallelujahChange(from, fromList, questionFrom);
  hallelujahChange(backgound, backgroundList, questionBackground);
  hallelujahChange(type, typeList, questionType);


  if ((email === '') || (name === '') || (job === '') || (from === '') || (type === '') || (backgound === '')) {
    e.preventDefault();
  } else {
    alert('成功提交 <3');
    console.log(`Student Email:${user.email}
Student Name: ${user.name}
Student Job: ${user.job}
Student Type: ${user.type}
Student From: ${user.from}
Student Background: ${user.backgound}
Other: ${user.other}`);
  }
});
