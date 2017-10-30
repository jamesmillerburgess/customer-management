const ko = {
  app: {
    title: 'Agility 고객관리',
  },
  nav: {
    dashboard: '홈',
    contacts: '연락처',
    companies: '회사',
    opportunities: '기회',
    search: '검색',
    profile: '내정보',
    editProfile: '내정보',
    logIn: '로그인',
    logOut: '로그아웃',
  },
  home: {
    username: '아이디',
    password: '비밀번호',
    passwordAgain: '비밀번호 다시 입력',
    register: '회원가입',
    logIn: '로그인',
    passwordsDoNotMatch: '비밀번호가 일치하지 않습니다',
  },
  dashboard: {
    title: '홈',
    searchPlaceholder: '리포트를 검색하다',
    addReport: '리포트 추가',
    teamActivity: '팀활동',
    opportunityForecast: '기회 예측 (USD)',
    dateFormat: 'YYYY[년] MMMM',
  },
  teamActivity: {
    placeholderTitle: 'Work as a team',
    placeholderText: [
      'Gain insight into the contacts, companies, and opportunities \n' +
        'created, and the interaction with your sales team afterwards.',
      'Once there has been some activity by you or someone on your team,\n' +
        'it will display in this widget.',
      "If you don't have a team yet, you can add one from your profile page.",
    ],
    placeholderButtonText: 'Go to profile',
  },
  opportunityForecast: {
    placeholderTitle: 'Forecast your sales',
    placeholderText: [
      "Keep up to date with your team's progress towards its quota each month.",
      'Once your team has an opportunity closing this month, a graph of \n' +
        'your forecast will display in this widget.',
      "If you don't have any opportunities yet, you can create one from \n" +
        'the opportunities page.',
    ],
    placeholderButtonText: 'Go to opportunities',
  },
  timeline: {
    creation: ['%{username}님이 ', ' 축가하셨습니다'],
    note: ['%{username}님이 ', '에 새노트를 남기셨습니다'],
    call: ['%{username}님이 ', '에 통화일지를 기록하셨습니다'],
    email: ['%{username}님이 ', '에 이메일일지를 기록하셨습니다'],
    meeting: ['%{username}님이 ', '에 미팅일지를 기록하셨습니다'],
    quote: ['%{username}님이 ', '에 견적일지를 기록하셨습니다'],
    joinTeam: ['%{username}님이 ', '에 합류하셨습니다'],
    leaveTeam: ['%{username}님이 ', '에서 탈퇴하셨습니다'],
    statusChange: ['%{username}님이 ', '의 기회 상태를 바꾸셨습니다'],
    dateFormat: 'YYYY[년] MMMM Do a h:mm ',
    callOutcome: '통화내용 결과',
    quoteNumber: '견적번호',
    newStatus: '새상태',
  },
  contacts: {
    title: '연락처',
    addButtonText: '연락처 추가',
    addOverlayTitle: '연락처 추가',
    addOverlayConfirmButtonText: '연락처 추가',
    addOverlayCancelButtonText: '취소',
    allSidebarText: '모든 연락처',
    nameColumn: '이름',
    createDateColumn: '추가 날짜',
    dateFormat: 'YYYY[년] MMMM Do',
    noDataText: '아직도 연락처가 없습니다!',
    fields: {
      name: '이름',
      company: '회사',
      position: '직급',
      contactType: '구매자 유형',
      email: '이메일',
      phoneNumber: '전화번호',
    },
  },
  companies: {
    title: '회사',
    addButtonText: '회사 추가',
    addOverlayTitle: '회사 추가',
    addOverlayConfirmButtonText: '회사 추가',
    addOverlayCancelButtonText: '취소',
    allSidebarText: '모든 회사',
    nameColumn: '이름',
    createDateColumn: '추가 날짜',
    dateFormat: 'YYYY[년] MMMM Do',
    noDataText: '아직도 연락처가 없습니다!',
    fields: {
      name: '이름',
      lifecycleStage: '구매 단계',
      status: '상태',
      website: '웹사이트',
      industry: '업계',
      phoneNumber: '전화번호',
      streetAddress: '주소',
      city: '도시',
      stateRegion: '구/읍',
      postalCode: '우편번호',
      numberOfEmployees: '직원수',
      annualRevenue: '연간매출',
      timeZone: '시간대',
      description: '메모',
    },
  },
  opportunities: {
    title: '기회',
    addButtonText: '기회 추가',
    addOverlayTitle: '기회 추가',
    addOverlayConfirmButtonText: '기회 추가',
    addOverlayCancelButtonText: '취소',
    total: '총 금액',
    fields: {
      name: '이름',
      amount: '액수',
      amountPlaceholder: '기회 액수',
      closeDate: '마감 날짜',
      closeDatePlaceholder: '기회 마감 날짜',
      status: '상태',
      company: '회사',
      opportunityType: '기회유형',
    },
  },
  profile: {
    title: '내정보',
    basicInfo: '기본 정보',
    ownedTeams: '팀 관리',
    username: '아이디',
    team: '소속팀',
    locale: 'Locale',
    teamName: '팀 이름',
    createTeamButtonText: '팀 추가',
    noTeams: '아직도 팀이 없습니다!',
    nameColumn: '이름',
    membersColumn: '팀원수',
    createDateColumn: '추가 날짜',
  },
  interactionMenu: {
    newNote: '새노트',
    logCall: '통화일지',
    logEmail: '이메일일지',
    logMeeting: '미팅일지',
    logQuote: '견적일지',
  },
  interaction: {
    dateAndTime: '날짜와 시간',
    outcome: '통화내용 결과',
    outcomePlaceholder: '아래에서 고르시오...',
    quoteNumber: '견적번호',
    noteTextPlaceholder: '새노트를 작성하시오...',
    callTextPlaceholder: '통화일지를 작성하시오...',
    emailTextPlaceholder: '이메일일지를 작성하시오...',
    meetingTextPlaceholder: '미팅일지를 작성하시오...',
    quoteTextPlaceholder: '견적일지를 작성하시오...',
    noteConfirmText: '노트 추가',
    callConfirmText: '통화일지 추가',
    emailConfirmText: '이메일일지 추가',
    meetingConfirmText: '미팅일지 추가',
    quoteConfirmText: '견적일지 추가',
    cancelButtonText: '취소',
  },
  editProperties: {
    aboutText: '%{name}의 정보',
    saveButtonText: '저장',
    cancelButtonText: '취소',
    singularPropertiesChangedText: '1개의 정보를 변경하였습니다',
    pluralPropertiesChangedText: '%{numEditedProperties}개의 정보를 변경하였습니다',
  },
  callOutcomes: {
    NO_ANSWER: '부재중',
    BUSY: '통화중',
    WRONG_NUMBER: '틀린 번호',
    LEFT_LIVE_MESSAGE: '타인에게 메세지 남김',
    LEFT_VOICEMAIL: '음성메세지 남김',
    CONNECTED: '연결됨',
  },
  opportunityStatuses: {
    APPOINTMENT_SCHEDULED: '약속일정',
    QUALIFIED_TO_BUY: '구매자격 인정',
    PRESENTATION_SCHEDULED: '프레전테이션 일정',
    DECISION_MAKER_BOUGHT_IN: '의사결정자 구두 결정',
    CONTRACT_SENT: '계약서 전송',
    CLOSED_WON: '계약성공 마감',
    CLOSED_LOST: '계약실패 마감',
  },
  opportunityType: {
    NEW_BUSINESS: '새계약',
    EXISTING_BUSINESS: '재계약',
  },
  contactTypes: {
    ADMINISTRATION: '관계자',
    DECISION_MAKER: '의사결정자',
    FINANCE: '재무책임자',
    INFLUENCER: '영향력 행사자',
    KEY: '핵심역할자',
    OPERATIONS: '생산관리자',
  },
  companyLifecycleStages: {
    PARTY: 'Party 다수 회사',
    LEAD: 'Lead 기회 구매자',
    PROSPECT: 'Prospect 장래의 구매자',
    CUSTOMER: 'Customer 기존 구매자',
  },
  companyStatuses: {
    ACTIVE: '진행중',
    INACTIVE: '진행저조',
    EXITED: '진행중단',
  },
  dateFieldFormat: 'YYYY[년] MMMM Do',
};

export default ko;
