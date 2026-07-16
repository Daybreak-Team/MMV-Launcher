// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 49842820, 49840800, 1, NPCPartType.Part1, 3000, 20000); 
    $InitializeEvent(1, 49842820, 49840800, 2, NPCPartType.Part2, 3000, 20002); 
    if (IsMapVariation(0)) {
        if (EventFlag(49840000)) {
            $InitializeCommonEvent(0, 90055000, 49845200, 1, 49842200, 49840201);
            $InitializeCommonEvent(0, 90055001, 49845200, 1, 49840201, 49840200);
        }
        if (EventFlag(49840001)) {
            $InitializeCommonEvent(0, 90055000, 49845200, 2, 49842200, 49840201);
            $InitializeCommonEvent(0, 90055001, 49845200, 2, 49840201, 49840200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49840200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49842200, 49840200);
    }
    $InitializeCommonEvent(0, 90065910, 49840200, 49840205, 49840800, 921510, 690047, 49845210, 49840800, 903050502, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49840200, 49840800, 921510, 49845210, 49840800, 903050502, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49840800, 2, 0, 0, 1050, 921510, 903050502, 49840800);
    }
    $InitializeCommonEvent(0, 90015012, 49845210, 49840200);
    $InitializeCommonEvent(1, 90015012, 0, 49840200);
    $InitializeCommonEvent(0, 90015020, 49840200, 49840800);
    $InitializeCommonEvent(0, 90015008, 49840205, 49840800, 921510, 49840800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49842200, 49840800);
        $InitializeCommonEvent(0, 90015023, 49840200, 40, 0, 49845210, 49840800, 903050502, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49840200, 49845210, 40, 921510, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49840200, 49840800, 49845210, 1020, 921510, 110320, 903050502, 49840800);
        $InitializeCommonEvent(0, 90015470, 49842200, 49840200, 49840800, 49845210, 0, 0, 49845210);
        $InitializeCommonEvent(0, 90015446, 49845210, 49840200, 49840800, 49842200);
        $InitializeCommonEvent(0, 90015460, 49842200, 49840800);
        $InitializeCommonEvent(0, 90015460, 49842200, 0);
        $InitializeCommonEvent(0, 90015460, 49842200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49842200, 49840800);
        $InitializeCommonEvent(0, 90015475, 49842200, 0);
        $InitializeCommonEvent(0, 90015475, 49842200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49840800);
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49840000, 49840300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49840000, 49840300);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49840000, 49840300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49840000, 49840300);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49840000, 49840300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49840000, 49840300);
    }
    if (3 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49840000, 49840301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49840000, 49840301);
    }
    if (3 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49840000, 49840301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49840000, 49840301);
    }
    if (3 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49840000, 49840301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49840000, 49840301);
    }
});

$Event(49842820, Default, function(chrEntityId, partId, partGroupId, hp, animationId){
    CreateNPCPart(chrEntityId, partId, partGroupId, hp, 1, 1 , false, false);
    WaitFor(NPCPartHP(chrEntityId, partId) < 1);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 999900003));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFixedTimeSeconds(10);
    RestartEvent();
});

$Event(498402800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49842810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49840801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49840800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});


