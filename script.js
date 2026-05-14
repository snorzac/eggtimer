let selectedMinutes = 0;
let interval = null;
let isPaused = false;
let remainingSeconds = 0;

function showDetail(type, minutes, image, description)
{
    selectedMinutes = minutes;
    document.getElementById('egg-label').textContent = type;
    document.getElementById('egg-image').src = image;
    document.getElementById('egg-description').textContent = description;
    document.getElementById('timer-egg-label').textContent = type;

    document.getElementById('selection-view').style.display = 'none';
    document.getElementById('detail-view').style.display = 'flex';
}

function startTimer()
{
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('timer-view').style.display = 'flex';

    remainingSeconds = selectedMinutes * 60;
    isPaused = false;
    document.getElementById('pause-btn').textContent = 'pause';

    runTimer();
}

function runTimer()
{
    interval = setInterval(() =>
    {
        if (!isPaused)
        {
            remainingSeconds--;

            let mins = Math.floor(remainingSeconds / 60);
            let secs = remainingSeconds % 60;
            document.getElementById('countdown').textContent = `${mins}:${secs.toString().padStart(2, '0')}`;

            if (remainingSeconds <= 0)
            {
                clearInterval(interval);
                showReady();
            }
        }
    }, 1000)
}

function togglePause()
{
    isPaused = !isPaused;
    document.getElementById('pause-btn').textContent = isPaused ? 'resume' : 'pause';
}

function goBack(destination)
{
    clearInterval(interval);
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('timer-view').style.display = 'none';

    if (destination === 'selection')
    {
        document.getElementById('selection-view').style.display = 'flex';
    }

    else if (destination === 'detail')
    {
        document.getElementById('detail-view').style.display = 'flex';
    }
}

function showReady()
{
    document.getElementById('timer-view').style.display = 'none';
    document.getElementById('ready-view').style.display = 'flex';
    document.getElementById('ready-image').src = document.getElementById('egg-image').src;
}

function goHome()
{
    document.getElementById('ready-view').style.display = 'none';
    document.getElementById('selection-view').style.display = 'flex';
}