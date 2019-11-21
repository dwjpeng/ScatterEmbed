export default {

	generic:{
		back:`Назад`,
		skip:`Пропустить`,
		next:`Далее`,
		confirm:`Подтвердить`,
		accept:`Принять`,
		allow:`Разрешить`,
		deny:`Запретить`,
		okay:`Okay`,
		cancel:`Cancel`,
		open:`Открыть`,
		yes:`Да`,
		no:`Нет`,
		actions:`Действия`,
		enable:`Включить`,
		disable:`Выключить`,
		send:`Отправить`,
		receive:`Принять`,
		select:`Выбрать`,
		unselect:`Отменить выбор`,
		edit:`Править`,
		add:`Добавить`,
		save:`Сохранить`,
		new:`Новый`,
		delete:`Удалить`,
		remove:`Исключить`,
		remove_all:`Исключить Все`,
		copy:`Копия`,
		import:`Импорт`,
		export:`Экспорт`,
		refresh:`Обновить`,
		manage:`Управлять`,
		private_key:`Личный ключ | Личные ключи`,
		public_key:`Публичный ключ | Публичные ключи`,
		cards:`Карта | Карты`,
		expired:`Просрочен`,
		keys:`Ключ | Ключи`,
		hide:`Спрятать`,
		reveal:`Раскрыть`,
		tokens:`Токен | Токены`,
		networks:`Сеть | Сети`,
		blockchains:`Блокчейн | Блокчейны`,
		contracts:`Контракт | Контракты`,
		memo:`Примечание`,
		symbol:`Символ`,
		decimals:`Десятичные`,
		chain_id:`Chain ID`,
		name:`Имя`,
		accounts:`Аккаунт | Аккаунты`,
		search:`Поиск`,
		buy:`Купить`,
		sell:`Продать`,
		contacts:`Контакты`,
		history:`История`,
		exchange:`Обменять`,
		view:`Смотреть`,
		redo:`Повторить`,
		promoted:`Повышен`,
		addressOrAccount:`Адрес или аккаунт`,
		pleaseWait:`Ждите...`,
		selectToken:`Выберите токен`,
		selectBlockchain:`Выберите блокчейн`,
	},

	sidebar:{
		dashboard:`Панель`,
		apps:`Приложения`,
		wallet:`Кошелек`,
		assets:`Активы`,
		identities:`Личности`,
		locations:`Расположения`,
		contacts:`Контакты`,
		history:`История`,
		networks:`Сети`,
		settings:`Настройки`,
		lock:`Закрыть кошелек`
	},

	login:{
		registerButtonTitle:`Начнем`,
		registerButtonSubtitle:`Давайте настроим Scatter`,
		reset:`Сбросить`,
		restore:`Восстановить`,
		support:`Поддержка`,
		passwordPlaceholder:`Введите пароль`,
	},

	setPassword:{
		title:`Установить надежный пароль`,
		description:`Надежные пароли должны содержать не менее 8 символов и включать как минимум один номер и один специальный символ.`,
		choosePass:`Выберите пароль`,
		confirmPass:`Подтвердите пароль`
	},

	welcome:{
		title:`Добро пожаловать в будущее`,
		description:`Ваш Scatter настроен и готов к использованию.`,
		button:`Начните использовать Scatter`
	},

	destroy:{
		title:`Уничтожить скаттер`,
		disclaimer:`Перед этим убедитесь, что у вас есть резервные копии всех ваших личных ключей.`,
		description:`Уничтожение Scatter необратимо, и вы не сможете восстановить данные без резервных копий.`
	},

	dashboard:{
		vote:{
			title:`Голосуйте за Scatter`,
			subTitle:`Покажите нам немного любви!`,
			description:`Мы запустили EOS Mainnet Block Producer, за который вы теперь можете голосовать. Помогите нам занять позицию блок продюсера, проголосовав за нас.`,
			button:`Голосуйте сейчас!`,
			voted:`Проголосовали за Scatter на {total} chains. Спасибо за вашу помощь!`
		}
	},

	apps:{
		explore:`Исследовать`,
		myApps:`Мои приложения`,
		allCategories:`Все категории`
	},

	app:{
		loginPermission:`Права доступа`,
		accountsProvided:`Предоставленные аккунты `,
		requiredFields:`Обязательные поля`,
		mutableFields:`Изменяемые поля`,
		removePermission:`Удалить разрешение`,
		removeIdentity:`Разрешения на вход в систему позволяют приложениям взаимодействовать с вашим Scatter. Вы можете принудительно выйти из приложения, удалив это разрешение.`,
		removeWhitelist:`Белые списки действий позволяют избежать постоянно всплывающих окон для подписания транзакций. Вы хотите удалить этот белый список?`,
	},

	wallet:{
		noKeys:{
			title:`У вас нет ключей`,
			description:`Нажмите одну из кнопок ниже, чтобы импортировать ключ, который у вас уже есть, или сгенерировать новый.`
		},

		generateKey:`Создать ключ`,
		importKey:`Импортировать ключ`,
		addCreditCard:`Добавить кредитную карту`
	},

	account:{
		totalFiatBalance:`Итого фиат баланс`,
		actions:{
			unlink_account:`Отвязать аккаунт`,
			change_permissions:`Изменить разрешения`,
			proxy_vote:`Прокси голование`,
			create_account:`Создать аккаунт`,
		}
	},

	assets:{
		noAccounts:`Нет аккаунтов`
	},

	histories:{
		sent:`Послано`,
		received:`Получено`,
		networkDisabled:`Сеть отключена`,

		clear:{
			title:`Очистка истории`,
			description:`Вы собираетесь стереть всю свою локальную историю. Это не удалит ключи или аккаунты.`,
		}
	},

	identities:{
		identities:`Личности`,

		id:{
			nameLabel:`Имя личности / Пользователь`,
			namePlaceholder:`Ваше присутствие в Интернете`,
			nameError:`Имя личности не может быть пустым, содержать пробелы или специальные символы.`
		},

		personal:{
			nameLabel:`Полное имя`,
			namePlaceholder:`Введите свое полное имя`,
			emailLabel:`Email`,
			dobLabel:`Дата рождения`,
		},

		location:{
			title:`Расположение`,
			noneSelected:`Не выбрано`
		},

		auth:{
			title:`Ключ аутентификации`,
			description:`Убедитесь, что вы сохранили копию этого ключа аутентификации, он понадобится вам для восстановления доступа к определенным приложениям, которым он требуется.`,
			changeButton:`Изменить / Смотреть`
		},

		removing:{
			title:`Удаление личности`,
			description:`Вы уверены, что хотите удалить {identity}`
		}
	},

	locations:{
		locations:`Расположения`,
		nameLabel:`Имя расположения`,
		namePlaceholder:`Дом, Офис, пр.`,
		countryLabel:`Страна`,
		countryItemNone:`Не выбрано`,
		addressLabel:`Адрес`,
		cityLabel:`Город`,
		stateLabel:`Штат (регион)`,
		phoneLabel:`Номер телефона`,
	},

	networks:{
		connectionError:`Ошибка соединения!`
	},


	settings:{
		menu:{
			general:`Основные`,
			tokens:`Токены`,
			explorers:`Исследователи`,
			backup:`Резервные копии`,
			firewall:`Межсетевой экран`,
			password:`Пароль`,
			destroy:`Уничтожить`
		},

		base:{
			basics:`Основные`,
			secure:`Настройки безопасности`
		},

		general:{
			version:`Версия`,
			language:`Язык`,
			simpleMode:`Простой режим`,
			simpleModeDescription:`Простой режим предназначен для обычных пользователей, в то время как расширенный режим (тот, который вы используете в данный момент) предназначен для очень технических пользователей и разработчиков.`,
			notifications:`Белый список уведомлений`,
			notificationsDescription:`Эти уведомления появляются в определенных операционных системах, когда вы автоматически подписываете транзакции из белого списка.`,
			ports:`Открытые порты`,
			portsDescription:`Это порты, открытые на вашем локальном компьютере, которые другие локальные приложения могут использовать для связи со Scatter.`,
			noPorts:`Нет открытых портов!`,
			dataPath:`Расположение файла данных`,
			dataPathDescription:`Каталог на вашем компьютере, в котором Scatter сохраняет свои зашифрованные данные.`,
			devConsole:`Консоль разработчика`,
			devConsoleDescription:`Иногда вам может понадобиться проверить, выдаёт ли Scatter какие-либо ошибки.`,
			devConsoleButton:`Открыть консоль`,
		},

		backup:{
			title:`Настроить резервирование`,
			description:`Резервные копии позволяют сохранить состояние всего Scatter, включая все ключи, разрешения и настройки.`,
			autobackup:`Выберите место для автоматического резервного копирования`,
			create:`Создать резервную копию`,
			currentFolder:`Текущая папка резервного копирования`,
			created:`Резервная копия создана!`
		},

		destroy:{
			title:`Уничтожить Scatter`,
			description:`Уничтожение вашего Scatter приведет к удалению всех ваших данных, включая ваши идентификационные данные и ключевые пары, с вашего локального компьютера. Он не удалит ваши учетные записи блокчейна из фактического блокчейна.`,
			important:`УБЕДИТЕСЬ, ЧТО У ВАС ЕСТЬ РЕЗЕРВНАЯ КОПИЯ, ПРЕЖДЕ ЧЕМ ДЕЛАТЬ ЭТО!`,
			button:`Уничтожить Scatter`
		},

		firewall:{
			ridl:{
				title:`Децентрализованный межсетевой экран`,
				description:`RIDL Defender - это патентованная децентрализованная система межсетевого экрана Scatter. Он помогает защитить вас от вредоносных веб-сайтов, приложений и учетных записей.`,
			},

			blocker:{
				title:`Органичения действий контракта`,
				description:`Эти действия не будут разрешены из внешних приложений.`,
				blacklisted:`Действия в черном списке`
			}

		},

		password:{
			title:`Поменяйте ваш пароль`,
			description:`Смена пароля периодически очень полезна. Мы часто используем одни и те же пароли в разных местах, что увеличивает вероятность их обнаружения.`,
			button:`Изменить пароль`,
			changed:`Пароль изменен!`,

			pin:{
				title:`Изменить ваш PIN`,
				description:`Если этот код включен, ваш PIN-код является дополнительным паролем, который требуется каждый раз, когда вы выполняете действие, которое не занесено в белый список. Не делайте его таким же, как ваш пароль.`,
				disabled:`PIN отключен`,
				changed:`PIN изменен!`,
				pinForAllTitle:`Используйте PIN-код для взаимодействия с внешними приложениями.`,
				pinForAllDescription:`Если вы включите это, вам также потребуется вводить PIN-код для каждого всплывающего окна, создаваемого внешним приложением. В противном случае ваш PIN-код потребуется только для внутренних действий Scatter, таких как отправка и обмен.`,
			}
		},

		tokens:{
			switch:{
				add:`Добавить токен`,
				whitelist:`Токены`,
				blacklist:`Отфильтровано`,
				settings:`Настройки`
			},

			whitelistButton:`Белый список токенов`,
			blacklistButton:`Черный список токенов`,

			hidePrimaryBalance:`Скрыть основной баланс`,
			hidePrimaryBalanceDescription:`Позволяет скрыть баланс в панели быстрых действий.`,
			filterSmallBalances:`Не показывать малые балансы`,
			filterSmallBalancesDescription:`Если вы хотите всегда фильтровать токены с небольшими балансами, вы можете установить эту натройку.`,

			noTokens:`Нет токенов`

		}

	},

	receive:{
		receiver:`Аккаунт для получения`,
		sendTo:`Отправить средства на`,
		forEosio:`Некоторые биржи попросят вас указать addressTag, memo или другую форму второго поля ввода. Вы можете ввести все что угодно в это поле, так как это настоящий аккаунт EOSIO.`
	},

	exchange:{
		fromAndToken:`От & Токен`,
		priceNotAvailable:`Price not available`,
		loadingPairs:`Загрузка пар`,
		noPairs:`Нет доступных пар`,
		loadingRate:`Загрузка цен`,
		errorTitle:`Ошибка обмена`,
		errorDescription:`Не удается подключиться к API обмена.`
	},

	transfer:{
		sender:`Отправка из`,
		receiver:`Отправка в`,
		amountTitle:`Сумма & Детали`,
		priceNotAvailable:`Цена не доступна`,
		memo:`Памятка (необязательно)`,
		loadingBalances:`Ваши балансы еще не загружены.`,
	},


	// COMPONENTS ----------------------------

	editNetwork:{
		systemToken:`Системный токен`,
		memorableName:`Добавьте запоминающееся имя`,
		host:`Хост`,
		protocol:`Протокол`,
		port:`Порт`,
		chainIdTooltip:`Получить Chain ID`,
		update:`Обновить данные`,

		systemTokenTitle:`Сетевой системный токен`,
		systemTokenDescription:`В некоторых сетях вместо системного токена по умолчанию используется собственный системный токен (например, ETH, EOS или TRX).`
	},

	keysAndAccountsList:{
		actions:{
			editName:`Редактировать имя`,
			copyPublicKey:`Копировать публичный ключ`,
			refreshAccounts:`Обновить аккаунты`,
			convertBlockchain:`Конвертировать блокчейн`,
			removeKey:`Удалить ключ`,
			linkAccount:`Связать аккаунт`,
		},

		noAccounts:{
			title:`У вас нет аккаунтов, связанных с этим ключом.`,
			requiresPayment:`{blockchain} блокчейн требует, чтобы вы заплатили небольшую плату за создание учетных записей.`,
			checkEnabled:`Убедитесь, что у вас есть сеть для включенния блокчейна {blockchain}.`,
			createAccountButton:`Создайте его сейчас!`
		},

		linkedAccounts:`Связанный аккаунты`,

		changeKeypairNameTitle:`Изменить имя пары ключей`,
		changeKeypairNameDescription:`Название пары ключей необходимо только для организационных целей. Это не влияет на блокчейн или сам ключ.`,
	},

	panels:{
		keypair:{
			selectHardware:`Выберите аппаратный кошелек`,
			availableHardwareChains:`Доступные блокчейны`,
			hardwareIndex:`Индекс ключа/адреса`,
			importTextKeyTitle:`Импортировать свой приватный ключ`,
			importTextKeyDescription:`Ваш закрытый ключ никогда не покидает ваше устройство. Мы используем его только для подписания транзакций, и никто, кроме вас, не будет иметь к нему доступа. Пожалуйста, помните, что, хотя Scatter - это хорошее место для хранения вашего ключа, у вас всегда должна быть его резервная копия где-то в автономном режиме.`,
			validTextKeyWarn:`Как только вы введете действительный ключ, он автоматически импортирует его.`,
			scanQR:`Сканировать QR-код`,
		}
	},


	// ---------------------------------------
	popins:{
		fullscreen:{
			addCustomNetwork:`Добавить пользовательскую сеть`,
			addNewContact:`Добавить новый контакт`,
			changeIdentityKey:`Идентификационный ключ`,
			generateRandomKey:`Создать случайный ключ`,
			saveIdentityKey:`Сохранить новый ключ идентификации`,
			checkHardwareTitle:`Проверить оборудование`,
			checkHardwareDescription:`Вы должны увидеть подтверждение на вашем аппаратном устройстве.`,
			confirmPassword:`Подтвердите пароль`,
			securityCode:`Введите код безопасности`,

			changePermissions:{
				title:`Изменение ключей аккаунта`,
				disclaimer:`Это может быть опасно!`,
				disclaimerDescription:`Вы собираетесь изменить ключи, управляющие этим аккаунтом. Убедитесь, что вы знаете, что делаете.`,
				owner:`Owner / Мастер ключ`,
				active:`Active / Daily key`,
				dontChange:`Оставить как есть`
			},

			createAccount:{
				title:`Создать аккаунт`,
				exchangeDescription:`Вы можете отправить средства с биржи или другого кошелька для создания аккаунта.`,
				cardDescription:`Эта опция в настоящее время отключена.`,
				startTyping:`Начните вводить имя, чтобы увидеть, доступно ли оно.`,
				includeMemo:`Убедитесь, что вы ввели поле memo при отправке, иначе ваши средства будут потеряны!`,
				clickAfter:`Нажмите после перевода`,
				lookingTitle:`Ищем аккаунт`,
				lookingDescription:`Scatter будет постоянно искать созданный аккаунт в течение следующих 30 минут. Как только он будет найден, он будет автоматически добавлен в ваш Scatter.`,
				exchangeErrorTitle:`Ошибка создания аккунта`,
				exchangeErrorDescription:`30 минут прошло с тех пор, как вы отправили деньги со своей биржи. Похоже, аккаунт еще не создан. Вам следует проверить статус транзакции на бирже.`,
				accountFoundTitle:`Аккаунт найден!`,
				accountFoundDescription:`Скаттер обнаружил аккаунт, который вы создали, используя биржу. Теперь вы можете увидеть его в своем кошельке.`,
				nameTooShort:`Имя аккаунта должно быть длиной 12 символов.`,
				nameFormatting:`Имя аккаунта должно состоять только из строчных букв.`,
				checkingName:`Проверка доступности имени...`,
				nameTaken:`Это имя уже занято`,
			},

			moderateCpu:{
				available:`Доступно {token}`,
				reclaiming:`Reclaiming {token}`,
				stake:`Stake`,
				unstake:`Unstake`
			},

			moderateRam:{
				type:`Тип`,
				bytesError:`Количество байт должно быть больше 15`
			},

			exportKey:{
				title:`Экспорт приватного ключа`,
				disclaimer:`Храните ваши приватные ключи в безопасности!`,
				description:`Всегда экспортируйте свои закрытые ключи и убедитесь, что у вас есть их резервная копия. Вы не сможете восстановить свои токены, если потеряете их.`,
				keyTitle:`Ключ`,
				keyDescription:`Экспортируйте этот закрытый ключ как текст`,
				qrTitle:`Бумажный кошелек`,
				qrDescription:`Экспортируйте этот закрытый ключ как зашифрованный QR-код`,
				privateKeyAsText:`Приватный ключ как текст`,
				privateKeyAsQR:`QR-код бумажного кошелька`,
				savedImage:`Изображение сохранено!`,
			},

			generateKey:{
				title:`Создать пару ключей`,
			},

			importBackup:{
				title:`Восстановить из резервной копии`,
				description:`Если у вас есть резервная копия для Scatter, вы можете импортировать ее здесь, загрузив в Scatter. Вам все еще понадобится пароль, чтобы разблокировать его.`,
				buttonTitle:`Выберите файл резервной копии`,
				buttonDescription:`Они заканчиваются на .json или .txt`,
				errorParsing:`При открытии этой резервной копии произошла ошибка`,
				errorDecrypting:`При расшифровке этой резервной копии произошла ошибка`,
				errorReading:`Этот файл резервной копии не может быть прочитан`,
			},

			importKeypair:{
				title:`Импортировать пару ключей`,
				text:`Текстовый`,
				hardware:`Аппаратный`,
				qrCode:`QR-код`,
				invalidPrivateKey:`Неверный приватный ключ`,
			},

			removeKeypair:{
				title:`Удаление ключа`,
				permanent:`Это действие постоянно`,
				removesAll:`Удаление ключей также удаляет все связанные с ним учетные записи и соответствующие разрешения. После того, как вы удалите ключ, он не может быть восстановлен.`,

			},

			unlinkAccount:{
				title:`Отвязать аккаунт`,
				description:`Удаление связанной учетной записи также удаляет все ее разрешения для приложений.`,
				disclaimer:`Это НЕ удалит аккаунт из блокчейна, только из Scatter.`,
			}

		},

		overlay:{
			exchanging:`Обмен`,
			transferring:`Отправка`,
			confirmPin:`Подтвердить PIN`,
			selectAccount:`Выбрать аккаунт`,
			selectBlockchain:`Выбрать блокчейн`,
			selectDisplayToken:`Выбрать токен для показа`,
			selectFiatCurrency:`Выбрать фиатную валюту`,
			selectBlockchainToken:`Выбрать токен блокчейна`,
			selectPublicKey:`Выбрать публичный ключ`,
			selectRecipient:`Выберать получателя`,
			selectToken:`Выбрать токен`,
			allBlockchains:`Все блокчейны`,
			selectTokenAndAccount:`Выбрать токен и аккаунт`,
			transactionSuccess:`Транзакция успешна!`,
			viewTransactionOn:`Нажмите на ссылку ниже, чтобы посмотреть на {explorer}`,

			enableSimpleMode:{
				// TODO:
			},

			enterPin:{

			},

			linkAccount:{
				title:`Связать EOSIO аккаунт`,
				description:`Позволяет связывать учетные записи в сетях, к которым вы либо не можете подключиться, либо к которым не подключены подключаемые модули истории.`,
				selectNetwork:`Выберите сеть`,
				button:`Связать`,
				noNetworksAvailable:`Нет доступных EOSIO сетей!`,
			}
		},
	},

	// ---------------------------------------
	popouts:{
		popoutApp:{
			noImage:`Нет изображения`,
			reputation:{
				unknown:`Неизвестная репутация`,
				trusty:`Достоверно`,
				scam:`Известная афера`
			}
		},

		requiredFields:{
			title:`Обязательные поля идентификации`,
			personalInformation:`Личные данные:`
		},

		login: {
			suffix:`увидим:`,
			dangerousPermission:`Вы входите в систему с правами owner. Это опасно.`,
			allAccountsFor:`Все аккаунты для:`,
			allAccountsDescription:`{app} запрашивает просмотр каждоого аккаунта для указанной сети. Это означает, что он сможет запрашивать подписи транзакций для любого аккаунта, который вы связали с любой из запрошенных сетей.`,
			noInfoNeededTitle:`Это приложение не запрашивает какую-либо личную информацию или аккаунт.`,
			noInfoNeededDescription:`Единственная информация, которую получит это приложение, - это базовая идентификационная информация, такая как ваше имя пользователя.`,
			noAccountsTitle:`У вас нет аккаунтов в этой сети`,
			noAccountsDescription:`Вам необходимо создать аккаунт, прежде чем вы сможете использовать приложения.`,
			personalInformation:`Личные данные:`,
			requestingPersonalInformation:`{app} запрашивает личную информацию. Он(а/о) сможет видеть только то, что запрашивается, и ничего другого, что вы, возможно, не заполнили в своей личности Scatter.`,
		},

		getPublicKey:{
			suffix:`хочет, чтобы вы предоставили публичный ключ`,
			select:`Выберите ключ`,
			generate:`Создайте новый ключ`,
		},

		linkApp:{
			suffix:`восстанавливает связь`,
			description:`Убедитесь, что имя приложения - это приложение, с которым вы сейчас взаимодействуете. Если это не так, это может быть опасное приложение, пытающееся действовать как другое.`
		},

		transferRequest:{
			suffix:`запрашивает перевод`,
			selectAccount:`Выберите аккаунт`,
		},

		updateIdentity:{
			suffix:`хочет`,
			changeName:`Измените свое имя`,
			addKycProofs:`Добавить доказательства KYC`,
		},

		signature:{
			moreAccounts:`больше аккаунтов`,
			keysInvolved:`Ключи участвуют`,
			accountsInvolved:`Аккаунты участвуют`,
			previouslyWhitelisted:`Это действие было ранее занесено в белый список`,
			hiddenAction:`Действие скрыто`,
			dangerous:`Одно или несколько действий, которые вы собираетесь подписать, опасны!`,
			dangerousAction:`Это действие опасно!`,
			dangerousTooltip:`Это действие опасно. Принятие его изменит ваши ключи и, возможно, передаст вашу учетную запись кому-то еще. Убедитесь, что ключи верны.`,
			whitelistThis:`Вы можете внести это в белый список, чтобы вам не приходилось повторно принимать эту транзакцию.`,
			whitelistExplainer:`Флажки, которые отмечены, могут изменять свои значения, не нарушая белый список.`,
			actionsTotal:`{x} действий всего`
		},
	},

	// ---------------------------------------
	errors:{
		badPassword:`Неверный пароль`,
		passwordConfirmation:`Подтверждение пароля не совпадает с паролем`,
		keypairExists:`Пара ключей с таким именем или публичным ключом уже существует`,
		transferError:`Произошла ошибка при попытке отправить токены`,
		badQrDecryption:`Произошла ошибка при расшифровке этого QR-кода. Вы уверены, что пароль для этого QR-кода правильный?`
	}
}
