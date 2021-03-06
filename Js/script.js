var app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Mario',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alex',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Sara',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Andrea',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luca',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            }
        ],
        avatarIndex: 0,
        textMessage: '',
        searchUser: '',
        
    },
    methods: {
        showChat: function(index) {
            this.avatarIndex = index;
        },

        // MILESTONE 3 pt.1 (invio messaggio) 
        // 1. scrivo qualcosa nell'input => 
        // 2. al click del tasto 'enter' (se l'input ?? vuoto non succede niente) => 
        // 3. stampo il messaggio nella chat (il messaggio ha la classe 'sent')
        addMessage: function() {
            if (this.textMessage != '') {

                const newMessage = {
                    date: 'data',
                    message: this.textMessage,
                    status: 'sent'
                }
                // console.log(newMessage);

                this.contacts[this.avatarIndex].messages.push(newMessage);
                // console.log(this.contacts[this.avatarIndex].messages);
            }
            
            // svuoto il campo input
            this.textMessage = '';

            // MILESTONE 3 pt.2 (risposta messaggio)
            // dopo 1s dall'invio msg => generare un messagio bianco ('ok')
            // 1.  => funzione con setTimeout (=>'this')
            // 2.  => creare un oggetto temporaneo (received)
            // 3.  => dopo 1s pusha l'oggetto in 'messages'
            setTimeout( () => {
                const msgReceived = {
                    date: 'data',
                    message: 'okay',
                    status: 'received'
                }
                this.contacts[this.avatarIndex].messages.push(msgReceived);
            }, 1000);
        }, 

        /* MILESTONE 4 
        Ricerca utente: scrivendo qualcosa nell???input a sinistra, 
        vengono visualizzati solo i contatti il cui nome contiene
        le lettere inserite (es. Marco, Matteo Martina -> 
        Scrivo ???mar??? rimangono solo Marco e Martina) */
        // 1- v-model nel campo input
        // 2- creare l'evento keyup
        // 3- forEach per ciclare l'array con arrow function passando l'elemento dell'array
        // 4- SE item.name.toLowerCase().includes(this.searchUser.toLowerCase()) allora item.visible == true
        // 5- Altrimenti item.visible == false
        // 6- collegare il <li> alla propriet?? visible

        // CREARE UN NUOVO ARRAY FILTRATO CHE SI SOSTITUISCE A 'users_list'
        filterUser() {

            this.contacts.forEach( (item) => {
                if ( item.name.toLowerCase().includes(this.searchUser.toLowerCase()) ) {
                    item.visible = true;
                } else {
                    item.visible = false;
                }              
            });
        }
    },
});
